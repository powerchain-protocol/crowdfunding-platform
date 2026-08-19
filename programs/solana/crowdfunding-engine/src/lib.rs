use anchor_lang::prelude::*;
declare_id!("Crwd111111111111111111111111111111111111111");
#[program]
pub mod powerchain_crowdfunding {
    use super::*;
    pub fn contribute(ctx: Context<Contribute>, amount: u64) -> Result<()> { require!(amount>0, CrowdfundingError::InvalidAmount); emit!(ContributionRecorded{campaign:ctx.accounts.campaign.key(),contributor:ctx.accounts.contributor.key(),amount}); Ok(()) }
    pub fn withdraw(ctx: Context<OwnerAction>) -> Result<()> { require_keys_eq!(ctx.accounts.campaign.owner,ctx.accounts.owner.key(),CrowdfundingError::Unauthorized); require!(Clock::get()?.unix_timestamp>=ctx.accounts.campaign.deadline && ctx.accounts.campaign.funded>=ctx.accounts.campaign.goal,CrowdfundingError::CampaignNotSuccessful); Ok(()) }
    pub fn refund_single(ctx: Context<RefundSingle>) -> Result<()> { require!(Clock::get()?.unix_timestamp>=ctx.accounts.campaign.deadline && ctx.accounts.campaign.funded<ctx.accounts.campaign.goal,CrowdfundingError::RefundUnavailable); require!(ctx.accounts.receipt.amount>0 && !ctx.accounts.receipt.refunded,CrowdfundingError::RefundUnavailable); ctx.accounts.receipt.refunded=true; Ok(()) }
    pub fn claim_milestone(ctx: Context<OwnerAction>, milestone: u8, proof_hash: [u8;32]) -> Result<()> { require_keys_eq!(ctx.accounts.campaign.owner,ctx.accounts.owner.key(),CrowdfundingError::Unauthorized); require!(proof_hash != [0u8;32], CrowdfundingError::ProofRequired); emit!(MilestoneClaimPrepared{campaign:ctx.accounts.campaign.key(),milestone,proof_hash}); Ok(()) }
}
#[account] pub struct Campaign { pub owner: Pubkey, pub goal:u64, pub funded:u64, pub deadline:i64, pub platform_fee_bps:u16, pub treasury_fund:Pubkey, pub reserve_fund:Pubkey }
#[account] pub struct ContributionReceipt { pub campaign:Pubkey, pub contributor:Pubkey, pub amount:u64, pub refunded:bool }
#[derive(Accounts)] pub struct Contribute<'info>{#[account(mut)]pub campaign:Account<'info,Campaign>,pub contributor:Signer<'info>}
#[derive(Accounts)] pub struct OwnerAction<'info>{#[account(mut)]pub campaign:Account<'info,Campaign>,pub owner:Signer<'info>}
#[derive(Accounts)] pub struct RefundSingle<'info>{pub campaign:Account<'info,Campaign>,#[account(mut,has_one=campaign,has_one=contributor)]pub receipt:Account<'info,ContributionReceipt>,pub contributor:Signer<'info>}
#[event] pub struct ContributionRecorded { pub campaign:Pubkey,pub contributor:Pubkey,pub amount:u64 }
#[event] pub struct MilestoneClaimPrepared { pub campaign:Pubkey,pub milestone:u8,pub proof_hash:[u8;32] }
#[error_code] pub enum CrowdfundingError { #[msg("Invalid amount")]InvalidAmount,#[msg("Unauthorized")]Unauthorized,#[msg("Campaign has not succeeded")]CampaignNotSuccessful,#[msg("Refund unavailable")]RefundUnavailable,#[msg("Milestone proof required")]ProofRequired }
