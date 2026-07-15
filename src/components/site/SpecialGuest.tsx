import { MessageSquare } from "lucide-react";
import guest from "@/assets/guest-masha-slonim.webp";
import { useI18n } from "@/lib/i18n";

export function SpecialGuest() {
  const { t } = useI18n();
  return (
    <section id="guest" className="py-8 md:py-12 lg:py-10 xl:py-12 bg-background">
      <div className="container-x">
        {/* Centered title */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-[11px] md:text-xs font-bold tracking-[0.22em] text-orange">
            {t("guest.kicker")}
          </div>
          <h3 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-[0.95]">
            {t("guest.name")}
          </h3>
        </div>

        {/* Stacked on mobile · image left / text right on desktop */}
        <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Portrait — framed on the face, responsive on every device */}
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
            <img
              src={guest}
              alt={t("guest.name")}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover object-[50%_40%]"
            />
          </div>

          {/* Text */}
          <div>
            {/* Description */}
            <div className="space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
              <p>{t("guest.desc1")}</p>
              <p>
                {t("guest.desc2pre")}
                <strong className="font-semibold text-navy">{t("guest.book")}</strong>
                {t("guest.desc2post")}
              </p>
            </div>

            {/* Topic of the meeting */}
            <div className="mt-8">
              <div className="h-px w-12 bg-orange" />
              <div className="mt-5 flex items-center gap-2 text-orange">
                <MessageSquare size={18} strokeWidth={2} aria-hidden="true" />
                <span className="text-[11px] md:text-xs font-bold tracking-[0.22em]">
                  {t("guest.topicLabel")}
                </span>
              </div>
              <h4 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight text-navy">
                {t("guest.topicTitle")}
              </h4>
              <div className="mt-3 space-y-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p>{t("guest.topic1")}</p>
                <p>{t("guest.topic2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
