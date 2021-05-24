# CI/CD for a React Application that is hosted on GKE that leverages Terraform

## Introduction
This project was used in creating an interactive tutorial for a university course, the tutorial can be found ![here](https://www.katacoda.com/taqui/scenarios/code). The tutorial was created for us to learn more about Kubernetes, Docker, CI/CD, GKE and Terraform. If this is setup correctly it should create a Kubernetes Cluster that has a CI/CD pipeline in which which you can push to a repo and with build and deploy it to the GKE cluster. The proj


# Technology used:
- React 
- Terraform
- Kubernetes
- CloudBuild
- Docker
- GKE 
- GCP 

# Important Files and Folders:
- Terraform Folder - This describes all the terraform related activity in which we create a GKE cluster with 3 nodes. This also creates a cloudbuild trigger but additional setup is neccasry. 
- Kubernetes Folder - This describe the services and deployment that is used to deploy the react application
- Cloudbuild.yaml File - This describe the Testing and building process of our application (CI/CD)
- src Folder - In here you will find the entire react application which in this case is an unfinished counter app.

