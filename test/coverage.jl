# Only run coverage from linux nightly build on travis.
get(ENV, "TRAVIS_OS_NAME", "")       == "linux"   || exit()
get(ENV, "TRAVIS_JULIA_VERSION", "") == "0.6" || exit()

Pkg.add("Coverage")
using Coverage

println("pwd: $(pwd())")
cd(joinpath(dirname(@__FILE__), "..")) do
    println("pwd: $(pwd())")
    Codecov.submit(Codecov.process_folder())
end
