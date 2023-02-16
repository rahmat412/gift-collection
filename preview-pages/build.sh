export BASE_PATH=$(cd `dirname $0`;pwd)
export ROOT_PATH=$BASE_PATH/../
# ready to dir
rm -rf $BASE_PATH/dist/**
mkdir $BASE_PATH/dist
mkdir $BASE_PATH/dist/assets
mkdir $BASE_PATH/dist/thanks-letter
mkdir $BASE_PATH/dist/birthday-card
cp $BASE_PATH/index.html $BASE_PATH/dist/
cp $BASE_PATH/assets/** $BASE_PATH/dist/assets/
# build chat want to say
sh $ROOT_PATH/thanks-letter/bin/build.sh preview
cp -r $ROOT_PATH/thanks-letter/dist/** $BASE_PATH/dist/thanks-letter/
# build birth want to say
cp -r $ROOT_PATH/birthday-card/** $BASE_PATH/dist/birthday-card/