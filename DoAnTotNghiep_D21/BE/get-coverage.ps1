
param(
    [Parameter(Position = 0)]
    [string]$TestFile = ""
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "📊 VITEST COVERAGE EXTRACTOR" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Build command
$command = "npm run test:coverage"
if ($TestFile) {
    $command += " -- $TestFile"
    Write-Host "🧪 Testing: $TestFile" -ForegroundColor Yellow
} else {
    Write-Host "🧪 Testing: ALL files" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "⏳ Running tests..." -ForegroundColor Gray
Write-Host ""

# Run tests and capture output
$output = npm run test:coverage -- $TestFile 2>&1 | Out-String

# Check for coverage report
$lines = $output -split "`n"
$coverageStartIndex = -1

for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i] -match '% Coverage' -or $lines[$i] -match 'Coverage report') {
        $coverageStartIndex = $i
        break
    }
}

if ($coverageStartIndex -ge 0) {
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "📊 COVERAGE REPORT" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    
    # Print from coverage start to end
    for ($i = $coverageStartIndex; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        
        # Highlight summary lines
        if ($line -match 'All files|^[A-Za-z].*\.ts\s+\|') {
            Write-Host $line -ForegroundColor Cyan
        } elseif ($line -match '^\s*$') {
            Write-Host $line
        } else {
            Write-Host $line
        }
    }
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
} else {
    Write-Host "========================================" -ForegroundColor Red
    Write-Host "❌ NO COVERAGE REPORT FOUND" -ForegroundColor Red
    Write-Host "========================================" -ForegroundColor Red
    Write-Host ""
    Write-Host "💡 Possible reasons:" -ForegroundColor Yellow
    Write-Host "   1. Too many test failures (>30 tests)" -ForegroundColor Yellow
    Write-Host "   2. Tests crashed before coverage could be generated" -ForegroundColor Yellow
    Write-Host "   3. Coverage provider not configured correctly" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🔧 Solutions:" -ForegroundColor Green
    Write-Host "   1. Fix test failures first, then run again" -ForegroundColor Green
    Write-Host "   2. Run tests for a specific file: .\get-coverage.ps1 serviceName.test.ts" -ForegroundColor Green
    Write-Host "   3. Check vitest.config.ts coverage settings" -ForegroundColor Green
    Write-Host ""
}

# Show test summary
$testFailMatch = $output | Select-String -Pattern "(\d+) failed.*(\d+) passed"
if ($testFailMatch) {
    Write-Host "📝 Test Summary:" -ForegroundColor Magenta
    Write-Host $testFailMatch.Matches[0].Value -ForegroundColor Magenta
    Write-Host ""
}

# Show if coverage folder was created
if (Test-Path "coverage") {
    Write-Host "✅ Coverage folder created: coverage/" -ForegroundColor Green
    Write-Host "   Open HTML report: start coverage/index.html" -ForegroundColor Green
} else {
    Write-Host "⚠️  Coverage folder NOT created (tests have failures)" -ForegroundColor Yellow
    Write-Host "   Text report shown above is still valid!" -ForegroundColor Yellow
}

Write-Host ""
