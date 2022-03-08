from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework.serializers import ModelSerializer
from .models import User


class UserTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['is_staff'] = user.is_staff
        return token


class RegisterSerializer(ModelSerializer):
    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'password')


class UserListSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name')


class UserProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'is_staff')


class QuoteCreatedBySerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'is_staff')
