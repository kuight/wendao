# Catalog v3 notes (v5.0.0-rc.2)

Text-only catalog update; no binary assets changed in this commit.

- asset-library-v3.json: 48 entries (44 carried from v2 + 4 new descriptors).
- 4 NEW entries (training / yinyang / quest / courier):
  1. v5_tile_training_yard        tile     gameplay-tile      physics
  2. v5_sprite_yinyang_boy_sheet  sprite   character-portrait  meta
  3. v5_ui_quest_panel            ui       hud                mixed
  4. v5_card_courier_mascot       card     collectible-card   meta
- META-v3.json main_sha = 4e86b2d57cb1356e706b8ce20dc9899505314122.
- asset-library-v3.md mirrors the JSON table.
- Entries 25-36 and 45-48 carry url=null (descriptor-only; URLs to be
  backfilled when the corresponding MOA renders are published).
