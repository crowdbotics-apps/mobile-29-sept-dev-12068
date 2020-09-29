from rest_framework import authentication
from hhgfghfh.models import Ghhfjhfhg
from .serializers import GhhfjhfhgSerializer
from rest_framework import viewsets


class GhhfjhfhgViewSet(viewsets.ModelViewSet):
    serializer_class = GhhfjhfhgSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Ghhfjhfhg.objects.all()
