import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { NftLendingProgram } from "../target/types/nft_lending_program";

describe("nft-lending-program", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.NftLendingProgram as Program<NftLendingProgram>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
