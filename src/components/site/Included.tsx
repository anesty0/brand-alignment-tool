import { Bed, Wine, Mountain, PenLine, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const items = [
  { icon: Bed, k: "inc.1" },
  { icon: Wine, k: "inc.2" },
  { icon: Mountain, k: "inc.3" },
  { icon: PenLine, k: "inc.4" },
  { icon: Users, k: "inc.5" },
];

export function Included() {
  const { t } = useI18n();
  return (
    <section className="py-6 md:py-10">
      <div className="container-x">
        <h3 className="text-center text-xl md:text-2xl font-extrabold tracking-tight text-navy">{t("inc.title")}</h3>
        <div className="mt-7 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-6">
          {items.map((it) => (
            <div key={it.k} className="text-center md:text-left">
              <it.icon className="mx-auto md:mx-0 text-info" size={28} strokeWidth={1.5} />
              <h4 className="mt-2.5 text-sm font-bold text-navy">{t(`${it.k}.t`)}</h4>
              <p className="mt-1.5 text-xs md:text-sm text-muted-foreground leading-relaxed">{t(`${it.k}.b`)}</p>
            </div>
          ))}
        </div>
        <p className="mt-7 text-center text-sm text-info">{t("inc.note")}</p>
      </div>
    </section>
  );
}
