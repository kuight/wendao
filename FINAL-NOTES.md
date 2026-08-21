# Wendao v5.0.0 final consolidation

This branch is a child of main baseline 4e86b2d57cb1356e706b8ce20dc9899505314122 and overlays the authoritative v5.0.0-rc tree. The release ZIP is tracked through Git LFS using release/*.zip; release tarballs are also covered by release/*.tar.gz. Portal v10 and catalog-v3 were refreshed from the authoritative uploaded artifacts. The fallback archive checksum was not independently available because its storage wrapper returned a retrieval error; the publish-kit bundle was used to recover the rc tree and large release file.
