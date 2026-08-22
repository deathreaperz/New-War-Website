/* ============================================================
   NEWS DATA — add new articles here
   
   To publish a new article:
   1. Copy one of the objects below
   2. Paste it at the TOP of the array (newest first)
   3. Change the id, date, tag, title, summary, and body
   4. Save the file — it will appear on news.html immediately

   Supported body block types:
     { "type": "p",         "text": "A paragraph." }
     { "type": "h3",        "text": "A subheading" }
     { "type": "ul",        "items": ["item one", "item two"] }
     { "type": "note",      "text": "A highlighted callout box." }
     { "type": "img",       "src": "path/to/image.png", "alt": "Description" }
     { "type": "separator"  }

   Supported tags: Patch Notes | Update | Lore | Announcement
   ============================================================ */

const NEWS_DATA = [
  {
    id: "balance-patch-3-1",
    date: "2026-08-23",
    tag: "Patch Notes",
    title: "Balance Patch 3.1 is Live",
    summary: "The biggest balance pass since launch — every faction touched, several long-standing base-game bugs addressed, and Yuri's Revenge: New War is better for it.",
    body: [
      { type: "p", text: "Patch 3.1 is the product of months of testing across skirmish, co-op, and campaign feedback. The headline changes are listed below, but the full diff is available on the ModDB page for those who want every line." },
      { type: "h3", text: "Allied Nations" },
      { type: "ul", items: [
        "Prism Tower damage radius slightly reduced at close range — walls no longer trivialise base defence entirely.",
        "Mirage Tank cloak delay shortened by 0.3s after firing.",
        "Guardian GI deploy/undeploy animation corrected (vanilla bug)."
      ]},
      { type: "h3", text: "Soviet Union" },
      { type: "ul", items: [
        "Apocalypse Tank turret traverse speed increased — previously unresponsive against fast units.",
        "Flak Trooper scatter radius reduced from 4 to 3 cells.",
        "Tesla Trooper shock range extended by 1 cell."
      ]},
      { type: "h3", text: "Yuri" },
      { type: "ul", items: [
        "Slave Miner economy scaling adjusted — early-game income was outpacing Soviet ore at equal miner count.",
        "Mastermind unit cap per player reduced from 3 to 2.",
        "Genetic Mutator superweapon charge time increased by 15s."
      ]},
      { type: "h3", text: "Black Force" },
      { type: "ul", items: [
        "Void Walker stealth detection range corrected (was using wrong value from base game table).",
        "Fracture Cannon splash damage reduced by 10% against infantry.",
        "Rift Generator build time increased."
      ]},
      { type: "note", text: "A full changelog with exact numeric values is linked on the ModDB page. Report anything unexpected on the bug tracker." }
    ]
  },
  {
    id: "black-force-lore-reveal",
    date: "2026-07-14",
    tag: "Lore",
    title: "Black Force — Origins Declassified",
    summary: "We've unsealed the first part of the Black Force case file: where they came from, what the fracture actually did, and why their technology shouldn't exist yet.",
    body: [
      { type: "p", text: "When we introduced Black Force as the fourth faction, we deliberately kept the lore sparse. The ambiguity was intentional — a faction that appears out of nowhere should feel like it appeared out of nowhere. But with the campaign's first chapter now locked in, we can start filling in the blanks." },
      { type: "h3", text: "The Fracture Event" },
      { type: "p", text: "The extraction of Yuri from the Chrono Chamber didn't just alter the Third War's outcome. It tore a hole in the timeline's consistency — a wound that, by all logic, should have sealed itself. It didn't. Instead, the wound propagated forward, and the future that grew from it was partially overwritten before it had a chance to solidify." },
      { type: "p", text: "Black Force is what stepped through before the wound closed. They are not from an alternate timeline — they are from a version of the future that no longer fully exists, and they know it." },
      { type: "h3", text: "The Technology" },
      { type: "p", text: "Their units operate on principles that are theoretically achievable within Red Alert 2's tech framework, but require development paths that the current timeline hasn't taken yet. The Void Walker, for instance, uses a stealth system derived from captured Psychic Dominator schematics that Yuri's forces haven't published yet in the current timeline." },
      { type: "note", text: "Part two of the case file — covering Black Force command structure and their objective in the current war — will follow alongside the campaign's second chapter." }
    ]
  },
  {
    id: "cncnet-client-update",
    date: "2026-06-02",
    tag: "Update",
    title: "CnCNet Client Updated to 6.3",
    summary: "The bundled CnCNet client has been updated to version 6.3. Here's what changed and what it means for multiplayer stability.",
    body: [
      { type: "p", text: "The New War installer now ships with CnCNet Client 6.3. If you're running a previous install, the updater will handle the transition automatically on next launch." },
      { type: "h3", text: "What Changed" },
      { type: "ul", items: [
        "Improved NAT traversal for peer-to-peer connections — games that previously failed to start on some router configurations should now connect reliably.",
        "Lobby chat now persists between game sessions without requiring a reconnect.",
        "Custom map metadata loads faster on slower drives.",
        "Spectator mode stability improvements."
      ]},
      { type: "h3", text: "Multiplayer Notes" },
      { type: "p", text: "The map pool for Quick Match has been updated to include three new Black Force-specific maps. These were designed by community members and reviewed by the balance team before inclusion." },
      { type: "note", text: "If you run into any connection issues after the update, the Discord #tech-support channel is the fastest route to a fix." }
    ]
  }
];
