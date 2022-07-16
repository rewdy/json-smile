terraform {
  required_version = ">=0.12"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }

  backend "s3" {
    bucket = "drewmey--devops-tf-state"
    key    = "json-smile.rewdy.lol/terraform.state"
    region = "us-east-1"
  }
}

provider "aws" {
  region = "us-east-1"
}

module "aws_static_site" {
  source  = "github.com/rewdy/terraform-aws-static-website"
  
  # This is the domain as defined in Route53
  domains-zone-root       = "rewdy.lol"

  # Domains used for CloudFront
  website-domain-main     = "json-smile.rewdy.lol"
  support-spa = true
}