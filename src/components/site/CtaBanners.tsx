import { Handshake, Mic, MessageCircle, Send, Mail } from "lucide-react";

export function CtaBanners() {
  return (
    <section id="contact" className="py-8 md:py-12 bg-background">
      <div className="container-x grid lg:grid-cols-[1fr_1fr_0.8fr] gap-6">
        <div className="rounded-2xl bg-orange-soft p-6 md:p-8 flex gap-5 items-center">
          <Handshake className="text-orange shrink-0" size={48} strokeWidth={1.5} />
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-extrabold tracking-wide text-navy">ДЛЯ ПАРТНЁРОВ И СПОНСОРОВ</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Станьте партнёром события и получите доступ к предпринимательской аудитории из разных стран
            </p>
            <button className="mt-4 inline-flex rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-xs font-semibold tracking-wider hover:brightness-110 transition">
              СТАТЬ ПАРТНЁРОМ
            </button>
          </div>
        </div>

        <div className="rounded-2xl bg-secondary p-6 md:p-8 flex gap-5 items-center">
          <Mic className="text-navy shrink-0" size={48} strokeWidth={1.5} />
          <div className="flex-1">
            <h4 className="text-base md:text-lg font-extrabold tracking-wide text-navy">ДЛЯ СПИКЕРОВ И ПРОЕКТОВ</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Мы отбираем ограниченное количество проектов для выступления и участия в ALPS CONNECT
            </p>
            <button className="mt-4 inline-flex rounded-md bg-navy text-white px-5 py-2.5 text-xs font-semibold tracking-wider hover:brightness-125 transition">
              ПОДАТЬ ЗАЯВКУ НА ВЫСТУПЛЕНИЕ
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-center text-center">
          <h4 className="text-sm md:text-base font-bold text-navy">Создатели проекта NATIVE CODE</h4>
          <button className="mt-4 mx-auto inline-flex rounded-md border border-border px-6 py-2.5 text-xs font-semibold tracking-wider text-navy hover:border-orange hover:text-orange transition">
            О ПРОЕКТЕ
          </button>
          <div className="mt-5 flex justify-center gap-5 text-xs font-medium text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><MessageCircle size={14} className="text-emerald-600" /> WhatsApp</span>
            <span className="inline-flex items-center gap-1.5"><Send size={14} className="text-info" /> Telegram</span>
            <span className="inline-flex items-center gap-1.5"><Mail size={14} className="text-orange" /> Email</span>
          </div>
        </div>
      </div>
    </section>
  );
}
