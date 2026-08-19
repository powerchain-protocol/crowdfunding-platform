use anchor_lang::prelude::*;
declare_id!("Cont111111111111111111111111111111111111111");
#[program] pub mod contributors { use super::*; pub fn record(ctx:Context<Record>,amount:u64)->Result<()> { require!(amount > 0, ErrorCode::InvalidAmount);let a=&mut ctx.accounts.aggregate;if a.wallet==Pubkey::default(){a.wallet=ctx.accounts.wallet.key();a.campaign=ctx.accounts.campaign.key()}a.total=a.total.checked_add(amount).ok_or(error!(ErrorCode::Overflow))?;a.count=a.count.checked_add(1).ok_or(error!(ErrorCode::Overflow))?;emit!(ContributionAggregateUpdated{campaign:a.campaign,wallet:a.wallet,total:a.total,count:a.count});Ok(()) } }
#[account] pub struct ContributorAggregate { pub campaign:Pubkey,pub wallet:Pubkey,pub total:u64,pub count:u64 }
#[derive(Accounts)] pub struct Record<'info>{/// CHECK: campaign PDA is verified by CPI caller/registry boundary
pub campaign:UncheckedAccount<'info>,#[account(init_if_needed,payer=wallet,space=8+32+32+8+8,seeds=[b"contributor",campaign.key().as_ref(),wallet.key().as_ref()],bump)]pub aggregate:Account<'info,ContributorAggregate>,#[account(mut)]pub wallet:Signer<'info>,pub system_program:Program<'info,System>}
#[event] pub struct ContributionAggregateUpdated { pub campaign:Pubkey,pub wallet:Pubkey,pub total:u64,pub count:u64 }
#[error_code] pub enum ErrorCode { #[msg("Contribution amount must be greater than zero")] InvalidAmount, #[msg("Aggregate overflow")] Overflow }
