# Find all the node_modules and delete
find . -name node_modules -type d -exec rm -rf {} \;

# Find all the pnpm-lock.yaml and delete
find . -name pnpm-lock.yaml -type f -exec rm -rf {} \;