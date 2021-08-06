
status="Mr.Linhkool"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='e';
a[12]='m';
a[13]=' ';
a[14]='h';
a[15]='e';
a[16]='t';
a[17]=' ';
a[18]='b';
a[19]='u';
a[20]='o';
a[21]='n';
a[22]=' ';
a[23]='r';
a[24]='o';
a[25]='i';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==26)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}


        
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>haha vậy là em hêt buồn rồi ! <img src='img/3.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Nói Chứ Em Đừng Buồn nữa nhé<img src='img/2.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Bởi Từ Giờ Bên Em Luôn Có Anh! <img src='img/4.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				