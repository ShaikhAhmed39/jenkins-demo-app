# Jenkins CI/CD Demo Application

This repository contains a simple Node.js application containerized using Docker and configured with a Jenkins CI/CD pipeline.

## 🚀 Pipeline Overview

The Jenkins pipeline (`Jenkinsfile`) consists of three automated stages:
1. **Build**: Builds a Docker image (`jenkins-demo-app`) from the application source.
2. **Test**: Executes automated unit tests (`npm test`) inside an isolated container.
3. **Deploy**: Stops any existing instance and runs the updated container mapping port `3001` to application port `3000`.

---

## 🛠️ Project Structure

* `app.js` - Simple HTTP server responding on port 3000.
* `test.js` - Automated verification test script.
* `package.json` - Node.js dependency and script definitions.
* `Dockerfile` - Container build instructions using `node:18-slim`.
* `Jenkinsfile` - Declarative pipeline defining CI/CD stages.

---

## 📸 Deployment Screenshots

### 1. Jenkins Stage View (Build #3)
<!-- Drop your Stage View / Dashboard screenshot here on GitHub -->


### 2. Console Output (Finished: SUCCESS)
<!-- Drop your Console Output screenshot here on GitHub -->


---

## 🧪 Accessing the App

Once deployed by Jenkins, verify the running container:

```bash
curl http://localhost:3001
