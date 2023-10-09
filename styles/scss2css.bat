set /a total_files=0
set /a css_files=0
set /a module_files=0
cd scss
for %%f in (*.scss) do (
  set /a total_files+=1
  if "%%~nf"=="global" (
    sass %%f ../css/%%~nf.css
    if exist ../css/%%~nf.css (
      set /a css_files+=1
    )
  )
  sass %%f ../module.css/%%~nf.module.css
  if exist ../module.css/%%~nf.module.css (
    set /a module_files+=1
  )
)

cd ..
if %module_files%==%total_files% (
  echo Success: All %module_files% CSS files generated.
) else (
  set /a not_module_files=total_files-module_files
  echo Error: %module_files% module files generated, %not_module_files% files not generated.
)
cd ..
pause
