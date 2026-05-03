# add-trailing-comma

A Trunk plugin for [add-trailing-comma](https://github.com/asottile/add-trailing-comma), a code formatter that enforces trailing commas in Python code for consistent formatting and cleaner diffs.

## Installation

Enable the linter in your `.trunk/trunk.yaml`:

```yaml
lint:
  enabled:
    - add-trailing-comma
```

Or use the CLI:

```bash
trunk check enable add-trailing-comma
```

## About

`add-trailing-comma` automatically adds trailing commas to Python multi-line data structures (lists, tuples, dictionaries, function arguments, etc.). This:

- Makes diffs cleaner when adding items to collections
- Follows PEP 8 style guidance for trailing commas
- Reduces merge conflicts when multiple people edit lists
- Works seamlessly with other formatters like `black`

## Configuration

### Basic Usage

The plugin works out-of-the-box with sensible defaults. It will format all Python files:

```bash
trunk check add-trailing-comma
```

### Custom Command Options

To customize the formatter behavior, add configuration to your `.trunk/trunk.yaml`:

```yaml
lint:
  definitions:
    - name: add-trailing-comma
      commands:
        - name: format
          run: add-trailing-comma ${target}
```

The `add-trailing-comma` tool supports these CLI options:

- No options by default — it auto-detects Python version features
- See [upstream documentation](https://github.com/asottile/add-trailing-comma) for details

## Ignoring Issues

### Same Line

```python
data = [
    'item1',
    'item2'
]  # trunk-ignore(add-trailing-comma)
```

### Next Line (File-Level)

```python
# trunk-ignore(add-trailing-comma)
data = [
    'item1',
    'item2'
]
```

### Entire File

Add to `.trunk/trunk.yaml`:

```yaml
lint:
  ignore:
    - linters: [add-trailing-comma]
      paths:
        - path/to/file.py
```

## What It Does

### Before

```python
test_list = [
    'a',
    'b',
    'c'
]

test_dict = {
    'x': 1,
    'y': 2
}
```

### After

```python
test_list = [
    'a',
    'b',
    'c',  # ← trailing comma added
]

test_dict = {
    'x': 1,
    'y': 2,  # ← trailing comma added
}
```

## Testing

To test the plugin locally:

```bash
# Run the formatter on a single file
trunk check add-trailing-comma path/to/file.py --verbose

# See what would be changed without applying
trunk check add-trailing-comma --no-fix

# Force re-check (bypass cache)
trunk check add-trailing-comma --force
```

## Compatibility

- **Python versions**: 3.10+
- **Trunk CLI**: 1.7.0+
- **add-trailing-comma**: 4.0.0+

## Contributing

Issues and contributions are welcome! Please file issues at the [Trunk plugins repository](https://github.com/trunk-io/plugins).

## License

MIT — See the [upstream add-trailing-comma project](https://github.com/asottile/add-trailing-comma) for details.
