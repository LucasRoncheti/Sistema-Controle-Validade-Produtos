@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

REM Executa o comando ipconfig e filtra a linha que contém o IPv4
for /f "tokens=*" %%a in ('ipconfig ^| find "IPv4"') do (
    set ip=%%a
    set ip=!ip:*: =!
)

REM Exibe o valor do IP no CMD
echo O endereço IPv4 é: %ip%

echo "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://%ip%/Sistema-Controle-Validade-Produtos/"

start "" "https://chart.googleapis.com/chart?chs=300x300&cht=qr&chl=https://%ip%/Sistema-Controle-Validade-Produtos/"



exit