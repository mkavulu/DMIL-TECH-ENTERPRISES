
@echo off
echo Checking system...

systeminfo
echo -----------------
sfc /scannow
echo -----------------
DISM /Online /Cleanup-image /RestoreHealth

echo Done!
pause
