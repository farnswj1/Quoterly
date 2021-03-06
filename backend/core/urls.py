from django.urls import path, include
from . import views

app_name = 'core'

user_urls = [
    path('all', views.UserListAPIView.as_view(), name='list'),
    path('register', views.RegisterUserAPIView.as_view(), name='register'),
    path('<int:pk>', views.UserProfileAPIView.as_view(), name='profile'),
]

urlpatterns = [
    path('login', views.UserTokenObtainPairView.as_view(), name='login'),
    path('refresh', views.UserTokenRefreshView.as_view(), name='refresh'),
    path('users/', include((user_urls, 'users'), namespace='users')),
]
