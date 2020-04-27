# VARIABLES
variable "resource_group_name"{
    type = string
    default = "cloud-shell-storage-westeurope"
}

variable "address_space"{
    type = list(string)
    default = ["10.0.0.0/16"]
}

variable "subnet_prefix"{
    type = list(string)
    default = ["10.0.0.0/24", "10.0.1.0/24"]
}

variable "subnet_name"{
    type = list(string)
    default = ["web", "db"]
}

# PROVIDERS
provider "azurerm" {
  features {}
}

# RESOURCES
module "vnet" {
  source              = "Azure/vnet/azurerm"
  resource_group_name = var.resource_group_name
  address_space       = var.address_space
  subnet_prefixes     = var.subnet_prefix
  subnet_names        = var.subnet_name

  tags = {
    environment = "dev"
    costcenter  = "it"
  }
}

resource "azurerm_resource_group" "example" {
  name     = var.resource_group_name
  location = "West Europe"
}

# OUTPUTS
output "vnet_id" {
  value = module.vnet.vnet_id
}