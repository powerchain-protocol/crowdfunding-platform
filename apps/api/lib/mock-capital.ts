export const mockListings = [
  { id:"lst_solarflow", slug:"solarflow-grid", productName:"SolarFlow Grid", category:"Renewables", stage:"Seed", location:"Helsinki, Finland", verified:true, matchScore:94, derivedRaiseGoal:"750000", currency:"EUR", trancheCount:4 },
  { id:"lst_medroute", slug:"medroute-ai", productName:"MedRoute AI", category:"Health technology", stage:"Pre-seed", location:"Madrid, Spain", verified:true, matchScore:89, derivedRaiseGoal:"380000", currency:"EUR", trancheCount:3 },
  { id:"lst_watermesh", slug:"watermesh", productName:"WaterMesh", category:"Climate infrastructure", stage:"Seed", location:"Valencia, Spain", verified:false, matchScore:78, derivedRaiseGoal:"400000", currency:"EUR", trancheCount:3 },
] as const;

export const mockDealRoomMessages = [
  { id:"msg_1", senderUserId:"founder_1", senderName:"Elena Martín", kind:"TEXT", body:"I uploaded the pilot acceptance summary and updated the second tranche proof criteria.", createdAt:"2026-08-19T01:10:00Z" },
  { id:"msg_2", senderUserId:"investor_1", senderName:"Northshore Ventures", kind:"TEXT", body:"Thanks. We are comfortable with the pilot milestone; please clarify the certification dependency in tranche three.", createdAt:"2026-08-19T01:12:00Z" },
  { id:"msg_3", senderUserId:"founder_1", senderName:"Elena Martín", kind:"TEXT", body:"Added. The contract draft now references certification as a release condition rather than a general target.", createdAt:"2026-08-19T01:15:00Z" },
] as const;
