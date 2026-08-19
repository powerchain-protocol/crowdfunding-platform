use anchor_lang::prelude::*;
declare_id!("Reg1111111111111111111111111111111111111111");
#[program] pub mod campaign_registry { use super::*; pub fn register(ctx:Context<Register>,campaign:Pubkey)->Result<()> { ctx.accounts.entry.campaign=campaign;ctx.accounts.entry.owner=ctx.accounts.owner.key();ctx.accounts.entry.active=true;emit!(CampaignRegistered{campaign,owner:ctx.accounts.owner.key()});Ok(()) } pub fn set_active(ctx:Context<Update>,active:bool)->Result<()> { require_keys_eq!(ctx.accounts.entry.owner,ctx.accounts.owner.key());ctx.accounts.entry.active=active;Ok(()) } }
#[account] pub struct RegistryEntry { pub campaign:Pubkey,pub owner:Pubkey,pub active:bool }
#[derive(Accounts)] #[instruction(campaign:Pubkey)] pub struct Register<'info>{#[account(init,payer=owner,space=8+32+32+1,seeds=[b"registry",campaign.as_ref()],bump)]pub entry:Account<'info,RegistryEntry>,#[account(mut)]pub owner:Signer<'info>,pub system_program:Program<'info,System>}
#[derive(Accounts)] pub struct Update<'info>{#[account(mut)]pub entry:Account<'info,RegistryEntry>,pub owner:Signer<'info>}
#[event] pub struct CampaignRegistered { pub campaign:Pubkey,pub owner:Pubkey }
