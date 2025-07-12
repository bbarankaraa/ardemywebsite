import { NextResponse } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req) {
    try {
        const {name, email, phone,recaptcha} = await req.json();

        const recaptchaResponse = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptcha}`, {method:"POST"}
        );

        const recaptchaResult= await recaptchaResponse.json();
        if(!recaptchaResult.success) {
            return NextResponse.json(
                {message: "reCaptcha verification failed."},
                {status: 400}
            );
        }
        const emailResponse = await resend.emails.send({
    from: 'User <onboarding@resend.dev>',
    to: ['bbarankaraa@gmail.com'],
    subject: 'Tebrikler! Randevun var...',
    html: `
    <h2>RANDEVU BİLGİLERİ</h2>
    <p><strong>İsim</strong> : ${name}</p>
    <p><strong>Mail</strong> : ${email}</p>
    <p><strong>Numara</strong> : ${phone}</p>
    `});
    
    return NextResponse.json({message: "Message Success!"},{status:200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({message: "Something went wrong!"},{status:500})
    }
}