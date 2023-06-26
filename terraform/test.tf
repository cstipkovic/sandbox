terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 3.0.0"
    }
  }
}

provider "aws" {
  credentials = file("credentials.json")

  profile = "test-terraform"
  region = "us-east-1"
  zone = "us-east-1a"
}
