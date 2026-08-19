import { AppShell, LocalizedText, PageHeader, StatusBadge } from "@powerchain/ui";
import { DealRoomLive } from "../../../components/deal-room-live";

const messages = [
  { id:"msg_1", roomId:"room", senderUserId:"founder_1", senderName:"Elena Martín", kind:"TEXT" as const, body:"I uploaded the pilot acceptance summary and updated the second tranche proof criteria.", createdAt:"2026-08-19T01:10:00Z" },
  { id:"msg_2", roomId:"room", senderUserId:"investor_1", senderName:"Northshore Ventures", kind:"TEXT" as const, body:"Thanks. We are comfortable with the pilot milestone; please clarify the certification dependency in tranche three.", createdAt:"2026-08-19T01:12:00Z" },
  { id:"msg_3", roomId:"room", senderUserId:"founder_1", senderName:"Elena Martín", kind:"TEXT" as const, body:"Added. The contract draft now references certification as a release condition rather than a general target.", createdAt:"2026-08-19T01:15:00Z" },
];

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <AppShell appName={<LocalizedText en="Deal Room" es="Sala de negociación"/>} notificationCount={2} nav={[{label:<LocalizedText en="Marketplace" es="Mercado"/>,href:"/marketplace"},{label:<LocalizedText en="Watchlist" es="Seguimiento"/>,href:"/watchlist"}]}><PageHeader eyebrow={<><LocalizedText en="Private room" es="Sala privada"/> · {id}</>} title="SolarFlow Grid × Northshore Ventures" description={<LocalizedText en="Negotiate terms, exchange diligence material and coordinate the milestone agreement inside one participant-only workspace." es="Negocia términos, intercambia material de debida diligencia y coordina el acuerdo por hitos en un espacio exclusivo para participantes."/>} action={<StatusBadge tone="success"><LocalizedText en="KYC complete" es="KYC completado"/></StatusBadge>}/><div className="mt-7"><DealRoomLive roomId={id} initialMessages={messages.map((message)=>({...message,roomId:id}))}/></div></AppShell>;
}
