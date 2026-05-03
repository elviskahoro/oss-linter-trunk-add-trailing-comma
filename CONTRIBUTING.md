# Contributing to add-trailing-comma Trunk Plugin

Thanks for your interest in contributing! This guide will help you get started.

## Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/trunk-add-trailing-comma.git
   cd trunk-add-trailing-comma
   ```

2. **Install dependencies:**
   ```bash
   # You'll need trunk CLI installed
   curl https://get.trunk.io -fsSL | bash
   
   # Then run trunk to set up
   trunk check
   ```

3. **Install the add-trailing-comma tool:**
   ```bash
   pip install add-trailing-comma
   ```

## Testing

### Run Tests Locally

```bash
# Run all tests
trunk check

# Run only this plugin's tests
trunk check add-trailing-comma

# Run tests with verbose output
trunk check --verbose
```

### Testing Manual Behavior

```bash
# Create a test Python file
cat > test_file.py << 'EOF'
data = [
    'a',
    'b'
]
EOF

# Run the formatter
add-trailing-comma test_file.py

# Check the result
cat test_file.py
```

## Making Changes

### Plugin Configuration (`plugin.yaml`)

If modifying the plugin definition:

1. Update `plugin.yaml` with your changes
2. Run `trunk check` to validate the YAML
3. Test with `trunk check add-trailing-comma --force`

### Documentation (`README.md`)

- Keep documentation clear and user-focused
- Include examples for common use cases
- Explain configuration options

### Test Data

Add new test cases to `test_data/`:

1. Create `test_name.in.py` with unformatted code
2. Create `test_name.fmt.shot` with the expected formatted output
3. Update `add-trailing-comma.test.ts` to reference the new test

## Submitting Changes

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Make your changes
4. Test thoroughly: `trunk check`
5. Commit with clear messages: `git commit -m "feat: description"`
6. Push and open a pull request

## Code Quality

- Run `trunk check` before committing
- Ensure all tests pass
- Keep commits atomic and well-described
- Update documentation for new features

## Submitting to Official Trunk Plugins

Once you're happy with your plugin, you can submit it to the [official Trunk plugins repository](https://github.com/trunk-io/plugins):

1. Fork https://github.com/trunk-io/plugins
2. Create a new directory `linters/add-trailing-comma/` in the plugins repo
3. Copy all files from this repo (plugin.yaml, README.md, test_data/, add-trailing-comma.test.ts)
4. Follow their [contribution guidelines](https://github.com/trunk-io/plugins/blob/main/CONTRIBUTING.md)
5. Open a PR to trunk-io/plugins

## Questions?

Open an issue on this repository or reach out to the [Trunk community Slack](https://slack.trunk.io/).
