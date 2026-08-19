# Common

Runtime-safe shared utilities live in `packages/common` and are imported from `@powerchain/common`. Keep browser/server-neutral helpers there. Server-only utilities belong in their owning server package; never import secrets, database clients, or Node-only modules into `@powerchain/common`.
