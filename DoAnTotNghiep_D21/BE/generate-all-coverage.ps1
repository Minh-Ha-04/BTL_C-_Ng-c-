# =====================================================
# Generate Coverage Report - Individual Test Runner
# =====================================================
# Script này chạy TỪNG test file riêng biệt để đảm bảo
# coverage report được tạo cho MỖI file, sau đó tổng hợp
# =====================================================

Write-Host "🚀 Starting Individual Test Coverage Generation..." -ForegroundColor Cyan
Write-Host ""

# Array of test files
$testFiles = @(
    "src/test/userService.test.ts",
    "src/test/tourService.test.ts",
    "src/test/bookingService.test.ts",
    "src/test/categoryService.test.ts",
    "src/test/couponService.test.ts",
    "src/test/feedbackService.test.ts",
    "src/test/notificationService.test.ts",
    "src/test/paymentService.test.ts",
    "src/test/reviewService.test.ts",
    "src/test/ticketService.test.ts"
)

$totalTests = 0
$passedTests = 0
$failedTests = 0

foreach ($testFile in $testFiles) {
    $fileName = [System.IO.Path]::GetFileNameWithoutExtension($testFile)
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
    Write-Host "📦 Running: $fileName" -ForegroundColor Yellow
    Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
    
    # Run test and capture output
    $output = npx vitest run $testFile 2>&1 | Out-String
    
    # Extract test counts
    if ($output -match "(\d+) passed.*\((\d+)\)") {
        $passed = [int]$matches[1]
        $total = [int]$matches[2]
        $passedTests += $passed
        $totalTests += $total
        
        Write-Host "✅ Tests: $passed/$total passed" -ForegroundColor Green
    }
    
    # Extract and display coverage for THIS file
    if ($output -match "($fileName\.ts)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)\s*\|\s*([\d.]+)") {
        $name = $matches[1]
        $stmts = $matches[2]
        $branch = $matches[3]
        $funcs = $matches[4]
        $lines = $matches[5]
        
        Write-Host "📊 Coverage: $name" -ForegroundColor Cyan
        Write-Host "   Statements: $stmts% | Branches: $branch% | Functions: $funcs% | Lines: $lines%" -ForegroundColor White
    }
    
    Write-Host ""
}

# Summary
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📊 TOTAL COVERAGE SUMMARY" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "Total Tests: $totalTests" -ForegroundColor White
Write-Host "Passed: $passedTests" -ForegroundColor Green
Write-Host "Failed: $($totalTests - $passedTests)" -ForegroundColor $(if ($failedTests -eq 0) { "Green" } else { "Red" })
Write-Host ""
Write-Host "✅ Coverage reports generated for each individual file above!" -ForegroundColor Green
Write-Host ""
Write-Host "💡 To view HTML coverage for a specific file, run:" -ForegroundColor Yellow
Write-Host "   npx vitest run src/test/<filename>.test.ts" -ForegroundColor DarkYellow
Write-Host ""
