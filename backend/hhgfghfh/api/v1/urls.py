from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import GhhfjhfhgViewSet

router = DefaultRouter()
router.register("ghhfjhfhg", GhhfjhfhgViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
