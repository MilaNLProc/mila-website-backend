---
# Widget configuration
widget: people  # Use the People widget
headless: true  # This file represents a page section
active: true  # Activate this widget
weight: 10  # Order within the page

# Widget title and subtitle
title: ""
subtitle: "Former members of our team"

# Content configuration
content:
  # Only show people with the "Alumni" user group
  user_groups:
    - Alumni

# Design
design:
  # Show social links
  show_social: true
  # Show interests
  show_interests: false
  # Options: 1 = List, 2 = Compact, 3 = Card, 4 = Citation
  view: 3
---