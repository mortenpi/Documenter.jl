# Only run coverage from linux nightly build on travis.
get(ENV, "TRAVIS_OS_NAME", "")       == "linux" || exit()
get(ENV, "TRAVIS_JULIA_VERSION", "") == "0.6"   || exit()
cd(Pkg.dir("Documenter"))

Pkg.add("Coverage")
using Coverage
Codecov.submit(Codecov.process_folder())
