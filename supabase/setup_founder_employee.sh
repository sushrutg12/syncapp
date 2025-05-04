#!/bin/bash

# Founder-Employee Matching Platform - Setup Script
# This script will apply the migrations and load the sample data

echo "Setting up Founder-Employee Matching Platform..."

# Check if Supabase CLI is installed
if ! command -v supabase &> /dev/null; then
    echo "Supabase CLI not found. Please install it first:"
    echo "npm install -g supabase"
    exit 1
fi

# Check if local Supabase is running
if ! supabase status | grep -q "Started"; then
    echo "Starting local Supabase instance..."
    supabase start
fi

# Apply migrations
echo "Applying database migrations..."
supabase migration up 20250505000000_update_profile_for_founder_employee.sql
if [ $? -ne 0 ]; then
    echo "Failed to apply schema migration"
    exit 1
fi

supabase migration up 20250505000100_create_founder_employee_api_functions.sql
if [ $? -ne 0 ]; then
    echo "Failed to apply API functions migration"
    exit 1
fi

# Load sample data (optional)
read -p "Do you want to load sample data? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "Loading sample data..."
    PGPASSWORD=postgres psql -U postgres -h localhost -p 54322 -d postgres -f founder_employee_seed.sql
    if [ $? -ne 0 ]; then
        echo "Failed to load sample data"
        exit 1
    fi
fi

echo "Setup complete!"
echo "You can now use the Founder-Employee Matching Platform API functions."
echo "See founder_employee_README.md for usage examples and documentation."

# Print URL to local Supabase Studio
SUPABASE_URL=$(supabase status | grep "API URL" | awk '{print $3}')
echo "Supabase Studio: ${SUPABASE_URL}" 