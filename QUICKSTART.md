# Quick Start: Publishing Your Trunk Plugin

Your `trunk-add-trailing-comma` plugin is ready to go! Here's the fastest path to getting it on GitHub.

## 1. Create GitHub Repo (2 minutes)

1. Go to [github.com/new](https://github.com/new)
2. Name: `trunk-add-trailing-comma`
3. Description: "Trunk plugin for add-trailing-comma"
4. Choose **Public**
5. Don't initialize with README
6. Click **Create**

## 2. Push Your Code (1 minute)

```bash
cd ~/trunk-add-trailing-comma
git remote add origin https://github.com/YOUR_USERNAME/trunk-add-trailing-comma.git
git branch -M main
git push -u origin main
```

## 3. Done! 🎉

Your plugin is now on GitHub. People can use it like this:

```yaml
# In their .trunk/trunk.yaml
plugins:
  sources:
    - id: add-trailing-comma-plugin
      uri: https://github.com/YOUR_USERNAME/trunk-add-trailing-comma
lint:
  enabled:
    - add-trailing-comma
```

## File Structure

```
~/trunk-add-trailing-comma/
├── plugin.yaml                 # Trunk plugin configuration
├── README.md                   # User documentation
├── CONTRIBUTING.md             # Developer guide
├── SETUP_FOR_GITHUB.md         # Detailed GitHub setup
├── add-trailing-comma.test.ts  # Trunk test file
├── test_data/
│   ├── basic.in.py            # Test input
│   └── basic.fmt.shot         # Expected output
├── LICENSE                     # MIT License
└── .gitignore
```

## What's Included

✅ **plugin.yaml** — Properly formatted for Trunk's plugin system
✅ **README.md** — Complete user documentation with examples
✅ **Tests** — TypeScript test file + test data for snapshot testing
✅ **CONTRIBUTING.md** — Guide for contributors
✅ **MIT License** — Ready to distribute
✅ **All docs** — SETUP_FOR_GITHUB.md explains everything

## Next Steps

### Option A: Just Publish (Recommended)
- Push to GitHub (see Step 2 above)
- Share the link: `https://github.com/YOUR_USERNAME/trunk-add-trailing-comma`
- Users can start using it immediately

### Option B: Add More Features
- Create test cases in `test_data/`
- Update `add-trailing-comma.test.ts`
- Make improvements to `README.md`
- Push updates to GitHub

### Option C: Submit to Official Trunk Plugins
When you're confident, submit to [trunk-io/plugins](https://github.com/trunk-io/plugins):
1. Fork their repo
2. Copy your plugin files into `linters/add-trailing-comma/`
3. Open a PR following their [contribution guide](https://github.com/trunk-io/plugins/blob/main/CONTRIBUTING.md)

See `SETUP_FOR_GITHUB.md` for detailed instructions on any of these.

## Testing Before Publish

Want to test locally before pushing?

```bash
cd ~/trunk-add-trailing-comma

# Install trunk CLI if you haven't
curl https://get.trunk.io -fsSL | bash

# Test the plugin configuration
trunk check

# Test the formatter directly
add-trailing-comma test_data/basic.in.py
```

## Questions?

- Read `SETUP_FOR_GITHUB.md` for detailed instructions
- Read `CONTRIBUTING.md` for development guidance
- See the comments in `plugin.yaml` for plugin configuration options

---

**Status**: ✅ Ready to publish

**Location**: `~/trunk-add-trailing-comma/`

**Next action**: Push to GitHub!
