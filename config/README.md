# Configuration Files

This directory contains configuration files for easily updating dynamic content without touching the component code.

## Research Metrics (`researchMetrics.ts`)

Update your research output metrics here. Changes will automatically reflect across the application.

### How to Update:

1. Open `config/researchMetrics.ts`
2. Update the values:
   - `citations`: Total citation count (e.g., "350+", "500+")
   - `hIndex`: H-Index value (number)
   - `journals`: Number of journal publications (number)
   - `patents`: Number of patents (number)
3. Save the file
4. The changes will appear immediately on the Research page

### Example:

```typescript
export const researchMetrics = {
  citations: "500+",    // Update this
  hIndex: 25,           // Update this
  journals: 75,         // Update this
  patents: 20,          // Update this
  lastUpdated: "2025-01-15"
};
```

No code changes needed - just update the numbers!
