import { notFound } from "next/navigation";
import { AppShell, Card, Icon, LocalizedText, PageHeader, StatusBadge } from "@powerchain/ui";
import { listingFixtures } from "../../../lib/listings";
import { AvatarPlaceholder, ProjectLogoPlaceholder } from "../../../components/placeholders";
import { XTipCard } from "../../../components/x-tip-card";

export default async function Page({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;
  const normalized = handle.replace(/^@/, "").toLowerCase();
  const listing = listingFixtures.find((item) => item.xHandle?.toLowerCase() === normalized);
  if (!listing) notFound();
  const founder = listing.team.find((member) => /founder|creator|builder/i.test(member.role)) ?? listing.team[0];
  if (!founder) notFound();

  return <AppShell appName={<LocalizedText en="Creator Profile" es="Perfil del creador"/>} nav={[{label:<LocalizedText en="Marketplace" es="Mercado"/>,href:"/marketplace"},{label:<LocalizedText en="Explore" es="Explorar"/>,href:"/explore"}]}>
    <PageHeader eyebrow={`@${normalized}`} title={founder.name} description={founder.bio} action={<StatusBadge tone={listing.verified ? "success" : "warning"}>{listing.verified ? <LocalizedText en="Business verified" es="Empresa verificada"/> : <LocalizedText en="Verification pending" es="Verificación pendiente"/>}</StatusBadge>}/>
    <div className="mt-7 grid gap-6 xl:grid-cols-[1fr_360px]">
      <div className="grid gap-5">
        <Card className="p-5 sm:p-6"><div className="flex flex-col gap-5 sm:flex-row sm:items-center"><div className="shrink-0">{listing.founderAvatarUrl ? <img src={listing.founderAvatarUrl} alt={`${founder.name} avatar`} className="h-20 w-20 rounded-2xl object-cover"/> : <AvatarPlaceholder label={founder.name}/>}</div><div className="min-w-0"><div className="text-xs font-bold uppercase tracking-[.12em] text-neutral-400">{founder.role}</div><h2 className="mt-1 text-xl font-bold">{founder.name}</h2><p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{founder.bio}</p><a href={`https://x.com/${normalized}`} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-emerald-950 dark:text-emerald-300">@{normalized} on X <Icon name="external-link"/></a></div></div></Card>
        <Card className="p-5 sm:p-6"><div className="flex items-start gap-4"><div className="shrink-0">{listing.logoUrl ? <img src={listing.logoUrl} alt="" className="h-14 w-14 rounded-xl bg-white object-contain p-1"/> : <ProjectLogoPlaceholder label={listing.productName}/>}</div><div><div className="text-xs font-bold uppercase tracking-[.12em] text-neutral-400"><LocalizedText en="Current listing" es="Proyecto actual"/></div><h2 className="mt-1 text-lg font-bold">{listing.productName}</h2><p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{listing.tagline}</p><a href={`/listings/${listing.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-950 dark:text-emerald-300"><LocalizedText en="Open due diligence" es="Abrir debida diligencia"/> <Icon name="arrow-right"/></a></div></div></Card>
        <Card className="p-5 sm:p-6"><h2 className="font-bold"><LocalizedText en="Trust boundary" es="Límite de confianza"/></h2><p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300"><LocalizedText en="Creator profile data, business verification, account authentication and payment settlement are separate states. A social profile or self-reported tip never creates an escrow balance or verified capital contribution." es="Los datos del perfil, la verificación empresarial, la autenticación y la liquidación son estados separados. Un perfil social o una propina autodeclarada nunca crea saldo de escrow ni una aportación verificada."/></p></Card>
      </div>
      <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start"><XTipCard handle={normalized}/><Card className="p-5"><h3 className="font-bold"><LocalizedText en="Contact & diligence" es="Contacto y diligencia"/></h3><p className="mt-2 text-sm leading-6 text-neutral-600 dark:text-neutral-300"><LocalizedText en="Use the participant-only deal room for offer terms and private diligence documents rather than social DMs." es="Usa la sala privada de negociación para términos de oferta y documentos de diligencia, en lugar de mensajes sociales."/></p><a href={`/deal-room/room_${listing.id}`} className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-xl bg-emerald-950 px-4 text-sm font-bold text-white"><Icon name="chat"/><LocalizedText en="Open deal room" es="Abrir sala"/></a></Card></aside>
    </div>
  </AppShell>;
}
