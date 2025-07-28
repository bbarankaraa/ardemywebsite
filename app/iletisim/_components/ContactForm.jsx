"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import ReCAPTCHA from "react-google-recaptcha"
import { useState } from "react"
import { toast, ToastContainer } from "react-toastify"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Ad soyad 2 karakterden uzun olmalı!",
  }),
  email: z.string().email({
    message: "Lütfen geçerli bir mail adresi giriniz!"
  }),
  phone: z
    .string()
    .regex(/^\d{11}$/, {
      message: "Telefon numarası 11 haneli olmalıdır!",
    }),
  recaptcha: z.string().min(1, "Lütfen bot kontrolünü yapınız!"),
})


const ContactForm = () => {

  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "0",
      recaptcha: "",
    },
  });

  async function onSubmit(values) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values }),
      });

      if (response.ok) { // Yanıt başarılıysa (2xx durum kodu)
        toast.success("Mail gönderildi!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Bir hata oluştu!"); // Sunucudan gelen hata mesajını göster
      }
    } catch (error) {
      console.error(error); // Hata durumunda konsola yazdır
      toast.error("İstek gönderilirken bir hata oluştu!"); // Kullanıcıya genel bir hata mesajı göster
    }
  }

  return (
    <div className="rounded-2xl shadow-3xl px-10 py-10 md:w-1/2 shadow-2xl">
      <ToastContainer position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <h2 className="text-3xl text-center mb-5">Randevu Formu</h2>
      <p className="text-gray-500 text-center mb-5">Randevunuzu burdan hemen oluşturun! En kısa süre içerisinde size ulaşacağız...</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ad Soyad</FormLabel>
                <FormControl>
                  <Input placeholder="Ad Soyad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefon Numarası</FormLabel>
                <FormControl>
                  <Input placeholder="Telefon numaranızı giriniz..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>

            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-Posta</FormLabel>
                <FormControl>
                  <Input placeholder="Mail adresinizi giriniz..." {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />
          <ReCAPTCHA
            sitekey="6Le07ZErAAAAADkpD_cj0cJ53lDik3Uuo38RcbSb"
            onChange={(token) => {
              setRecaptchaToken(token);
              form.setValue("recaptcha", token || null);
            }}
            onExpired={() => {
              setRecaptchaToken(null);
              form.setValue("recaptcha", "");
            }}
          />
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? "Gönderiliyor..." : "Randevu Oluştur"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default ContactForm