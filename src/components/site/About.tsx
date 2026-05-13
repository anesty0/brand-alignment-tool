import obs from "@/assets/observation.jpg";
import { Calendar, Users, Mountain, Briefcase } from "lucide-react";

const features = [
  { icon: Calendar, title: "ФОРМАТ", body: "Ski Opening — это Альпы, вечерний Z(I)Abend и открытие сезона. Приезжайте в компанию единомышленников — рити, энергия, всё за одним столом." },
  { icon: Users, title: "УЧАСТНИКИ", body: "Уже прошли через предпринимательство и перестройку моделей, работают с командами, капиталами и структурой бизнеса." },
  { icon: Mountain, title: "ЧТО ДАЁТ", body: "Обмен реальным опытом: бизнес, капитал, ВЭД и структура бизнеса. Возможность обсудить свои задачи с теми, кто в похожей ситуации." },
  { icon: Briefcase, title: "ДЕЛОВАЯ ЧАСТЬ", body: "Днём — горы, вечером — ужины, встречи и деловая программа. В рамках NATIVE CODE будут отдельные бизнес-ужины с обсуждением проектов." },
];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-x grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
          <img src={obs} alt="Alpine observation deck" loading="lazy" className="w-full h-full object-cover aspect-[4/5]" />
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-navy leading-snug">
            <span className="text-orange">NATIVE CODE</span> — это 5 дней в кругу людей, с которыми вы говорите на одном языке в жизни и бизнесе.
          </h3>
          <p className="mt-5 text-sm md:text-base text-muted-foreground leading-relaxed">
            В Зёльдене, в обстановке off the record, соберутся предприниматели, строящие бизнес в новых условиях и говорящие на русском языке. Здесь не нужно объяснять базовые вещи — мы говорим, думаем и смеёмся на одном языке.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {features.map((f) => (
              <div key={f.title}>
                <f.icon className="text-navy" size={28} strokeWidth={1.5} />
                <h4 className="mt-3 text-sm font-bold tracking-[0.12em] text-orange">{f.title}</h4>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
