tasks.register("clean") {
    delete(rootProject.buildDir)
    delete(file("data"))
}

tasks.register("buildAll") {
    dependsOn(":backend:build")
    dependsOn(":frontend:build")
}

tasks.register("runAll") {
    group = "run"
    description = "Launches both the backend and frontend applications in development mode."

    doLast {
        println("----------------------------------------------------")
        println("Starting backend (Spring Boot) in background...")
        println("Logs will be in backend/nohup.out")
        exec {
            workingDir = file("backend")
            commandLine("nohup", "./gradlew", "bootRun", ">", "nohup.out", "2>&1", "&")
            ignoreExitValue = true
        }
        println("Backend started. Check http://localhost:8080")

        println("\nInstalling frontend dependencies (npm install) if needed...")
        exec {
            workingDir = file("frontend")
            commandLine("npm", "install")
        }

        println("\nStarting frontend (Next.js) in background...")
        println("Logs will be in frontend/nohup.out")
        exec {
            workingDir = file("frontend")
            commandLine("nohup", "npm", "run", "dev", ">", "nohup.out", "2>&1", "&")
            ignoreExitValue = true
        }
        println("Frontend started. Check http://localhost:3000")

        println("\n----------------------------------------------------")
        println("Applications launched. You may need to wait a few moments for them to be fully ready.")
        println("To stop them, you will need to find their processes (e.g., using 'ps aux | grep java' and 'ps aux | grep node') and kill them manually.")
        println("----------------------------------------------------")
    }
}
