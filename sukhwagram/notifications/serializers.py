from rest_framework import serializers
from . import models
from sukhwagram.users import serializers as user_serializers
from sukhwagram.images import serializers as image_serializers


class NotificationSerializer(serializers.ModelSerializer):

    creator = user_serializers.ListUserSerializer()
    image = image_serializers.SmallImageSerializer()

    class Meta:
        model = models.Notification
        fields = (
            'id',
            'creator',
            'image',
            'comment',
            'notification_type',
            'to',
            'natural_time',
        )