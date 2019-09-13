# build icon

# compile the js files with google closure compiler
python compilejs.py $1 >min.js

# compress css file with yui
wget --post-data="input=`cat icon.css`" --output-document=min.css https://cssminifier.com/raw

# prepare index.php for production use
cp index.html index.php
sed -i -e 's/<!--<remove>//g' index.php
sed -i -e 's/<remove>-->//g' index.php
