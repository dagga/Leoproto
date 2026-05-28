tasks.register("clean") {
    delete(rootProject.buildDir)
    delete(file("data"))
}

tasks.register("buildAll") {
    dependsOn(":backend:build")
    dependsOn(":frontend:build")
}
