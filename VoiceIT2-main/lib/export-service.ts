import { departments } from '@/config/departmentConfig';
import { getTabData } from './sheet-service';
import * as XLSX from 'xlsx';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function exportSheetsAndNotifyLeads() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error("❌ Email user or password not set in environment variables.");
    throw new Error("Email configuration missing.");
  }

  for (const [deptKey, deptInfo] of Object.entries(departments)) {
    try {
      console.log(`Attempting to get data for department: ${deptKey}`);
      const data = await getTabData(deptKey);

      if (!data || data.length === 0) {
        console.warn(`No data found for ${deptKey}, skipping...`);
        continue;
      }
      console.log(`Data fetched for ${deptKey}. Rows: ${data.length}`);

      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, deptKey);

      const buffer = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: deptInfo.email,
        subject: `Recruitment Submissions - ${deptInfo.name}`,
        text: `Attached are all the form submissions for your department.`,
        attachments: [
          {
            filename: `${deptInfo.name}.xlsx`,
            content: buffer,
            contentType:
              'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          },
        ],
      });

      console.log(`✅ Sent Excel for ${deptKey}`);
    } catch (err) {
      console.error(`❌ Failed to process ${deptKey}:`, err);
    }
  }
}
