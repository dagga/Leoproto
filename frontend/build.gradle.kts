plugins {
    id("com.github.node-gradle.node") version "7.0.2"
}

node {
    download = true
    version = "20.20.2"
}

tasks.register("buildFrontend") {
    dependsOn("npmInstall")
    doLast {
        exec {
            commandLine("npx", "next", "build")
        }
    }
}

tasks.register("build") {
    dependsOn("buildFrontend")
}
