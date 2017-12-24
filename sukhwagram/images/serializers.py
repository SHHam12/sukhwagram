from rest_framework import serializers
from . import models

class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Image
        field = '__all__'


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Comment
        field = '__all__'


class LikeSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Like
        field = '__all__'