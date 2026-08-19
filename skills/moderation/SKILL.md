# moderation skill

    ## Purpose
    Report triage and moderation recommendations.

    ## Allowed scopes
    - `moderation.read`
- `moderation.recommend`

    ## Required inputs
    - authenticated actor and organization context when the operation is private
    - authoritative structured data or provider observations
    - request/correlation identifiers for auditable runs

    ## Output contract
    - analysis, summary, draft, or proposal only
    - label assumptions and stale/provider-unavailable state
    - include source record identifiers needed for audit/review

    ## Forbidden
    - `moderation.audit.delete`
- `treasury.freeze`
    - access private keys or seed phrases
    - bypass role, policy, RLS, escrow, or multisig gates
    - fabricate settlement, verification, evidence, signatures, provider state, or audit history

    ## Audit
    Every production execution must be attributable to an `AgentRun`/audit event with actor, organization, input references, output commitment, policy result, and timestamps.
