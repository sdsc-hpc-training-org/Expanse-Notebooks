#!/bin/zsh

#Written by AI 
# Fixed target directory
TARGET_DIR="/Users/aarushmehrotra/Downloads/Coding/Work/Mary/Expanse-Notebooks/_posts"

# Safety check
if [[ ! -d "$TARGET_DIR" ]]; then
  echo "Error: Directory not found: $TARGET_DIR"
  exit 1
fi

echo "Processing markdown files in: $TARGET_DIR"

# Iterate through all Markdown files
for file in "$TARGET_DIR"/*.md(.N); do
  # Skip if not a regular file
  [[ -f "$file" ]] || continue

  # Verify front matter exists (starts with ---)
  if grep -q "^---" "$file"; then
    tmpfile=$(mktemp)

    # Insert metadata fields right before the second '---'
    awk '
      BEGIN { count = 0 }
      /^---$/ {
        count++
        if (count == 2) {
          print "year_created: "
          print "date_last_tested: "
          print "cpu_or_gpu: "
          print "hpc_system: "
        }
      }
      { print }
    ' "$file" > "$tmpfile"

    mv "$tmpfile" "$file"
    echo "✅ Updated: $(basename "$file")"
  else
    echo "⚠️  No front matter found in: $(basename "$file")"
  fi
done

echo "All done!"
