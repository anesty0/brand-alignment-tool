import { Bed, Wine, Mountain, PenLine, Users } from "lucide-react";

const items = [
  { icon: Bed, title: "Проживание", body: "5 ночей в отеле с завтраками (отель на выбор)" },
  { icon: Wine, title: "Общие мероприятия", body: "Welcome drink, гала-ужин открытия и финальный вечер" },
  { icon: Mountain, title: "ALPS CONNECT", body: "конференция, ужин и специальный вечер на высоте 1950 м" },
  { icon: PenLine, title: "Ски сафари", body: "катание с инструкторами с разделением по уровню" },
  { icon: Users, title: "Комьюнити", body: "окружение предпринимателей и разговоры в формате off the record" },
];

export function Included() {
  return (
    <section className="py-12 md:py-20">
      <div className="container-x">
        <h3 className="text-center text-xl md:text-2xl font-extrabold tracking-tight text-navy">ЧТО ВКЛЮЧЕНО В УЧАСТИЕ</h3>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {items.map((it) => (
            <div key={it.title} className="text-center md:text-left">
              <it.icon className="mx-auto md:mx-0 text-info" size={30} strokeWidth={1.5} />
              <h4 className="mt-3 text-sm font-bold text-navy">{it.title}</h4>
              <p className="mt-2 text-xs md:text-sm text-muted-foreground leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-info">
          Дополнительно оплачивается: перелёт, ски-пасс, аренда оборудования
        </p>
      </div>
    </section>
  );
}
